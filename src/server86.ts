
const express = require('express')
import {handler86} from "./handler86";
const app = express()
app.get('/86', handler86)
app.listen(3000, () => {})
        