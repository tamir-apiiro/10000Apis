
const express = require('express')
import {handler3894} from "./handler3894";
const app = express()
app.get('/3894', handler3894)
app.listen(3000, () => {})
        