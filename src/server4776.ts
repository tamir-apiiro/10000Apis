
const express = require('express')
import {handler4776} from "./handler4776";
const app = express()
app.get('/4776', handler4776)
app.listen(3000, () => {})
        