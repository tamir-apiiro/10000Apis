
const express = require('express')
import {handler4358} from "./handler4358";
const app = express()
app.get('/4358', handler4358)
app.listen(3000, () => {})
        