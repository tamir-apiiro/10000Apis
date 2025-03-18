
const express = require('express')
import {handler4432} from "./handler4432";
const app = express()
app.get('/4432', handler4432)
app.listen(3000, () => {})
        