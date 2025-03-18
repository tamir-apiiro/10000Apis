
const express = require('express')
import {handler3257} from "./handler3257";
const app = express()
app.get('/3257', handler3257)
app.listen(3000, () => {})
        