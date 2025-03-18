
const express = require('express')
import {handler3736} from "./handler3736";
const app = express()
app.get('/3736', handler3736)
app.listen(3000, () => {})
        