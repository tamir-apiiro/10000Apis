
const express = require('express')
import {handler4475} from "./handler4475";
const app = express()
app.get('/4475', handler4475)
app.listen(3000, () => {})
        