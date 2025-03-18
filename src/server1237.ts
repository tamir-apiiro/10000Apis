
const express = require('express')
import {handler1237} from "./handler1237";
const app = express()
app.get('/1237', handler1237)
app.listen(3000, () => {})
        