
const express = require('express')
import {handler3108} from "./handler3108";
const app = express()
app.get('/3108', handler3108)
app.listen(3000, () => {})
        