
const express = require('express')
import {handler3776} from "./handler3776";
const app = express()
app.get('/3776', handler3776)
app.listen(3000, () => {})
        