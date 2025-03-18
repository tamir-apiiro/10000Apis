
const express = require('express')
import {handler1548} from "./handler1548";
const app = express()
app.get('/1548', handler1548)
app.listen(3000, () => {})
        