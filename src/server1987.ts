
const express = require('express')
import {handler1987} from "./handler1987";
const app = express()
app.get('/1987', handler1987)
app.listen(3000, () => {})
        