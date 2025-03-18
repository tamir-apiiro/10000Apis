
const express = require('express')
import {handler4822} from "./handler4822";
const app = express()
app.get('/4822', handler4822)
app.listen(3000, () => {})
        