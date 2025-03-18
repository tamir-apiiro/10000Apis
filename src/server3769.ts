
const express = require('express')
import {handler3769} from "./handler3769";
const app = express()
app.get('/3769', handler3769)
app.listen(3000, () => {})
        