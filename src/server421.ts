
const express = require('express')
import {handler421} from "./handler421";
const app = express()
app.get('/421', handler421)
app.listen(3000, () => {})
        