
const express = require('express')
import {handler1560} from "./handler1560";
const app = express()
app.get('/1560', handler1560)
app.listen(3000, () => {})
        