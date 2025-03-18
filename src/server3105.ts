
const express = require('express')
import {handler3105} from "./handler3105";
const app = express()
app.get('/3105', handler3105)
app.listen(3000, () => {})
        