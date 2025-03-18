
const express = require('express')
import {handler1030} from "./handler1030";
const app = express()
app.get('/1030', handler1030)
app.listen(3000, () => {})
        