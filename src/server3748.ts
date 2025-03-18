
const express = require('express')
import {handler3748} from "./handler3748";
const app = express()
app.get('/3748', handler3748)
app.listen(3000, () => {})
        