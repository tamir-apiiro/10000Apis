
const express = require('express')
import {handler1156} from "./handler1156";
const app = express()
app.get('/1156', handler1156)
app.listen(3000, () => {})
        