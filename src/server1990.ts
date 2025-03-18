
const express = require('express')
import {handler1990} from "./handler1990";
const app = express()
app.get('/1990', handler1990)
app.listen(3000, () => {})
        