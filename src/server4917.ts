
const express = require('express')
import {handler4917} from "./handler4917";
const app = express()
app.get('/4917', handler4917)
app.listen(3000, () => {})
        