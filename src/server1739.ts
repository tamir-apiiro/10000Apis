
const express = require('express')
import {handler1739} from "./handler1739";
const app = express()
app.get('/1739', handler1739)
app.listen(3000, () => {})
        