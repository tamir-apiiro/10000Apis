
const express = require('express')
import {handler4036} from "./handler4036";
const app = express()
app.get('/4036', handler4036)
app.listen(3000, () => {})
        