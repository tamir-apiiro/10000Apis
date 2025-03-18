
const express = require('express')
import {handler5259} from "./handler5259";
const app = express()
app.get('/5259', handler5259)
app.listen(3000, () => {})
        