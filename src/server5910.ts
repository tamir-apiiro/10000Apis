
const express = require('express')
import {handler5910} from "./handler5910";
const app = express()
app.get('/5910', handler5910)
app.listen(3000, () => {})
        