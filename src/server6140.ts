
const express = require('express')
import {handler6140} from "./handler6140";
const app = express()
app.get('/6140', handler6140)
app.listen(3000, () => {})
        