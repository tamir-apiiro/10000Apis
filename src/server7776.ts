
const express = require('express')
import {handler7776} from "./handler7776";
const app = express()
app.get('/7776', handler7776)
app.listen(3000, () => {})
        