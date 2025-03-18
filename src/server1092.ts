
const express = require('express')
import {handler1092} from "./handler1092";
const app = express()
app.get('/1092', handler1092)
app.listen(3000, () => {})
        