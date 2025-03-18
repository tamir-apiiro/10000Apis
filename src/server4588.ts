
const express = require('express')
import {handler4588} from "./handler4588";
const app = express()
app.get('/4588', handler4588)
app.listen(3000, () => {})
        