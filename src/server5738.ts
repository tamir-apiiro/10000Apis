
const express = require('express')
import {handler5738} from "./handler5738";
const app = express()
app.get('/5738', handler5738)
app.listen(3000, () => {})
        