
const express = require('express')
import {handler3498} from "./handler3498";
const app = express()
app.get('/3498', handler3498)
app.listen(3000, () => {})
        