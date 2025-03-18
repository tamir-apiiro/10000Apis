
const express = require('express')
import {handler3259} from "./handler3259";
const app = express()
app.get('/3259', handler3259)
app.listen(3000, () => {})
        