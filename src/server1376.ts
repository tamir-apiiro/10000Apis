
const express = require('express')
import {handler1376} from "./handler1376";
const app = express()
app.get('/1376', handler1376)
app.listen(3000, () => {})
        