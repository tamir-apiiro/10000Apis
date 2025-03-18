
const express = require('express')
import {handler4237} from "./handler4237";
const app = express()
app.get('/4237', handler4237)
app.listen(3000, () => {})
        