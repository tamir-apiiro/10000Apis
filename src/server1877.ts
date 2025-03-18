
const express = require('express')
import {handler1877} from "./handler1877";
const app = express()
app.get('/1877', handler1877)
app.listen(3000, () => {})
        