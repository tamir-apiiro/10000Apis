
const express = require('express')
import {handler4332} from "./handler4332";
const app = express()
app.get('/4332', handler4332)
app.listen(3000, () => {})
        