
const express = require('express')
import {handler1953} from "./handler1953";
const app = express()
app.get('/1953', handler1953)
app.listen(3000, () => {})
        