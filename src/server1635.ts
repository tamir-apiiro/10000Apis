
const express = require('express')
import {handler1635} from "./handler1635";
const app = express()
app.get('/1635', handler1635)
app.listen(3000, () => {})
        