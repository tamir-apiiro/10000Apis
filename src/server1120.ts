
const express = require('express')
import {handler1120} from "./handler1120";
const app = express()
app.get('/1120', handler1120)
app.listen(3000, () => {})
        