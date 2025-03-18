
const express = require('express')
import {handler2776} from "./handler2776";
const app = express()
app.get('/2776', handler2776)
app.listen(3000, () => {})
        