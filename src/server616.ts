
const express = require('express')
import {handler616} from "./handler616";
const app = express()
app.get('/616', handler616)
app.listen(3000, () => {})
        