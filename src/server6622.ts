
const express = require('express')
import {handler6622} from "./handler6622";
const app = express()
app.get('/6622', handler6622)
app.listen(3000, () => {})
        