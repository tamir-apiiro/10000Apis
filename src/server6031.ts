
const express = require('express')
import {handler6031} from "./handler6031";
const app = express()
app.get('/6031', handler6031)
app.listen(3000, () => {})
        