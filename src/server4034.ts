
const express = require('express')
import {handler4034} from "./handler4034";
const app = express()
app.get('/4034', handler4034)
app.listen(3000, () => {})
        