
const express = require('express')
import {handler4975} from "./handler4975";
const app = express()
app.get('/4975', handler4975)
app.listen(3000, () => {})
        