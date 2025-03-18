
const express = require('express')
import {handler1141} from "./handler1141";
const app = express()
app.get('/1141', handler1141)
app.listen(3000, () => {})
        