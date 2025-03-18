
const express = require('express')
import {handler1500} from "./handler1500";
const app = express()
app.get('/1500', handler1500)
app.listen(3000, () => {})
        