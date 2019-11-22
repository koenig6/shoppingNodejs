const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000

  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', function(req, res)
          {
            res.render('pages/index');
          });
  app.get('/postalRateCalc', calculateRate);

  app.listen(PORT, function()
             {
                console.log(`Listening on`, PORT);
             });

function calculateRate(req, res)
{
    let weight = Number(req.query.weight);
    let mailType = req.query.mailType;
    mailType = mailType.toLowerCase();

    let result = 0;


    let message = "Have a nice day!";

    if (mailType == "stamped")
        {
        switch(true)
            {
                case weight <= 1 && weight > 0:
                    result = .55;
                    break;
                case weight <= 2 && weight > 1:
                    result = ".70";
                    break;
                 case weight <= 3 && weight > 2:
                    result = .85;
                    break;
                 case weight <= 3.5 && weight > 3:
                    result = "1.00";
                    break;
                 case weight > 3.5:
                    message = " - Your envelope is too large.  Please select Flat for mail type.";
                    break;
                default:
                    result = 0;
            }//end switch
        }//end if stamped

     else if (mailType == "metered")
        {
              switch(true)
                {
                    case weight <=1 && weight > 0:
                        result = ".50";
                        break;
                    case weight <= 2 && weight > 1:
                        result = .65;
                        break;
                     case weight <= 3 && weight > 2:
                        result = ".80";
                        break;
                     case weight <= 3.5 && weight > 3:
                        result = .95;
                        break;
                     case weight > 3.5:
                        message = " - Your envelope is too large.  Please select Flat for mail type.";
                        break;
                    default:
                        result = 0;
                }//end switch
        }//end else if metered

    else if(mailType == "flat")
        {
           switch(true)
                {
                    case weight <=1 && weight > 0:
                        result = "1.00";
                        break;
                    case weight <= 2 && weight > 1:
                        result = 1.15;
                        break;
                     case weight <= 3 && weight > 2:
                        result = "1.30";
                        break;
                     case weight <= 4 && weight > 3:
                        result = 1.45;
                        break;
                    case weight <=5 && weight > 4:
                        result = "1.60";
                        break;
                    case weight <=6 && weight > 5:
                        result = 1.75;
                        break;
                    case weight <=7 && weight > 6:
                        result = "1.90";
                        break;
                    case weight <=8 && weight > 7:
                        result = 2.05;
                        break;
                    case weight <=9 && weight > 8:
                        result = "2.20";
                        break;
                    case weight <=10 && weight > 9:
                        result = 2.35;
                        break;
                    case weight <=11 && weight > 10:
                        result = "2.50";
                        break;
                    case weight <=12 && weight > 11:
                        result = 2.65;
                        break;
                    case weight <=13 && weight > 12:
                        result = "2.80";
                        break;
                    case weight > 13:
                        message = " This is not the best shipping option for you.";
                        break;
                    default:
                        result = 0;
                }//end switch
        }//end else if flat

    else if(mailType == "retail")
        {
           switch(true)
                {
                    case weight <=4 && weight > 0:
                        result = 3.66;
                        break;
                    case weight <= 8 && weight > 4:
                        result = 4.39;
                        break;
                     case weight <= 12 && weight > 8:
                        result = 5.19;
                        break;
                    case weight <= 13 && weight > 12:
                        result = 5.71;
                        break;
                    case weight > 14:
                        message = " This is not the best shipping option for you.";
                        break;
                    default:
                        result = 0;
                }//end switch
        }//end else if retail

    const params = {mailType: mailType, weight: weight, result: result, message: message };

    res.render('pages/getRate', params);
}
