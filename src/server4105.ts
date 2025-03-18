
const express = require('express')
import {handler4105} from "./handler4105";
const app = express()
app.get('/4105', handler4105)
app.listen(3000, () => {})
        