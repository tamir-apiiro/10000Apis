
const express = require('express')
import {handler3387} from "./handler3387";
const app = express()
app.get('/3387', handler3387)
app.listen(3000, () => {})
        