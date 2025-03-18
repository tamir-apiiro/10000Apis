
const express = require('express')
import {handler4842} from "./handler4842";
const app = express()
app.get('/4842', handler4842)
app.listen(3000, () => {})
        